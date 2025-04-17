import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const chatMessages = [
    { id: 1, name: 'Claudia Alves', message: 'Do more of what you love.', time: '3m ago' },
    { id: 2, name: 'Dani Martinez', message: 'Do your own thing.', time: '5m ago' },
    { id: 3, name: 'Kimberly Nguyen', message: 'Kindness is beautiful.', time: '1h ago' },
    { id: 4, name: 'Mariana Napolitani', message: 'Live your purpose.', time: '2h ago' },
    { id: 5, name: 'Olivia Wilson', message: 'You got this.', time: '5h ago' },
    { id: 6, name: 'Rachelle Beaudry', message: "You're wonderful.", time: 'Yesterday' },
    { id: 7, name: 'Soo Jin Ae', message: 'Keep it simple.', time: 'Yesterday' },
  ];

const renderMessageItem = ({ item }) => (
    <View style={styles.messageCard}>
     
      <Icon 
        name="user" 
        type="font-awesome" 
        size={40} 
        color="#517fa4"
        containerStyle={{ marginRight: 12 }}
      />
      
      <View style={styles.messageContent}>
        <Text style={styles.senderName}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Messages & Chat</Text>
          <Text style={styles.markRead}>Mark all read</Text>
        </View>


        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort by time</Text>
        </View>


        <View style={styles.messagesContainer}>
          <FlatList
            data={chatMessages}
            renderItem={renderMessageItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>


        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Icon name="home" type="font-awesome" size={24} color="#666" />
            <Text style={styles.navText}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Icon name="wechat" type="font-awesome" size={24} color="#2089dc" />
            <Text style={[styles.navText, styles.activeNavText]}>Chat</Text>
          </View>
          <View style={styles.navItem}>
            <Icon name="envelope" type="font-awesome" size={24} color="#666" />
            <Text style={styles.navText}>Mail</Text>
          </View>
          <View style={styles.navItem}>
            <Icon name="user" type="font-awesome" size={24} color="#666" />
            <Text style={styles.navText}>Profile</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  markRead: {
    color: '#2089dc',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sortContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sortText: {
    color: '#666',
    fontSize: 14,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  separator: {
    height: 10,
  },
  messageContent: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#2089dc',
    fontWeight: 'bold',
  },
});
