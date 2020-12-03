import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';
import * as Yup from 'yup';
import axios from 'axios';

import AppForm from '../Components/Form/AppForm';
import AppFormField from '../Components/Form/AppFormField';
import AppSubmitButton from '../Components/Form/AppSubmitButton';
import AppFormPicker from '../Components/Form/AppFormPicker';
import AppDatePicker from '../Components/AppDatePicker/AppDatePicker';
import AuthContext from '../AuthContext/Context';
import { getCategories, getPriority } from '../api/Requests';

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required(),
//   description: Yup.string().required().max(120),
//   category: Yup.string().required(),
//   priorty: Yup.string().required(),
//   date: Yup.date().required(),
// });

const UpdateListScreen = ({ navigation, route }) => {
  const authContext = useContext(AuthContext);
  const [categories, setCategory ] = useState([]);
  const [priority, setPriority ] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { item } = route.params;
//   console.log(item);

  // Get Api Auth Key
  const { user } = authContext;

  useEffect(()=>{
    const fetchCategory = getCategories(user.api_token)
    setCategory(fetchCategory);
    const fetchPriority = getPriority(user.api_token)
    setPriority(fetchPriority);
},[])

  const updateTask = async (
    title,
    description,
    deadline,
    category_id,
    priority_id
  ) => {
    try {
      const { data } = await axios.patch(
        `http://practice.mobile.kreosoft.ru/api/tasks/${item.id}`,
        {
          title,
          description,
          done: item.done,
          deadline,
          category_id,
          priority_id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      );
      console.log('Updated data', data);


      // Reset Navigation Stack
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Not Forget' }],
    //   });
      navigation.goBack();
    } catch (error) {
      console.log(error, 'error is coming from update data');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: item.title,
            description: item.description,
            date: new Date(item.deadline).toUTCString(),
            category: item.category,
            priority: item.priority,
          }}
        //   validationSchema={validationSchema}
          onSubmit={ async(values) => {
            const { title, description, date, category, priority } = values;
           await updateTask(
              title,
              description,
              new Date(date).getTime() / 1000,
              category.id,
              priority.id
             );
       
          }}
        >
          <>
            <AppFormField name="title" label="Title" />

            <AppFormField
              label="Description"
              maxLength={120}
              numberOfLines={3}
              name="description"
              mode="outlined"
              // value={item.description}
            />

            <AppDatePicker allowPress name="date" />

            <AppFormPicker
              categories={categories}
              placeholder="Category"
              name="category"
              icon="plus-square-o"
            />

            <AppFormPicker
              categories={priority}
              placeholder="Priority"
              name="priority"
            />

            <View style={styles.btnContainer} />
            <AppSubmitButton title="Post"  />
          </>
        </AppForm>
      </View>
    </View>
  );
};
export default UpdateListScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
  },
  btnContainer: {
    marginTop: 40,
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
