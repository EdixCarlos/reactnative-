import React from 'react';
import {View, Text, FlatList} from 'react-native';

const MyList = props => {
    
    return (
        <View>
            <FlatList 
          data={props.lista}
          renderItem={item => props.renderItem(item)}/>
        
    </View>
      )
};
export default MyList;