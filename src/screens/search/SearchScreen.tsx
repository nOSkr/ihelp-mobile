import { Button, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { useSWRToken } from '../../hooks/useSWRToken';
import { Auth } from '../../models/Auth';
import { AuthApi } from '../../apis';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../store/authSlice';

const SearchScreen = memo(() => {
    const dispatch = useDispatch()

      const logout = async () => {
        try {
          await AuthApi.logout();
          dispatch(authLogout());
        } catch (err) {
          console.log(err);
        }
      };
    return (
      <View>
        <Button onPress={logout} title="SearchScreen" />
      </View>
    )
  })

export default SearchScreen

SearchScreen.displayName = "SearchScreen"

const styles = StyleSheet.create({})