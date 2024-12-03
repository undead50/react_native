import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; // Icons for the Bottom Navigation

const AdminLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Dashboard</Text>
            <Text>Welcome to your enterprise dashboard!</Text>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Profile</Text>
            <Text>Manage your profile here.</Text>
          </View>
        );
      case 'settings':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Settings</Text>
            <Text>Configure your application settings here.</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action icon="bell" onPress={onLogout} color="black" />
        <Appbar.Action icon="logout" onPress={onLogout} color="black" />
      </Appbar.Header>

      {/* Main Content */}
      <View style={styles.mainContent}>{renderContent()}</View>

      {/* Custom Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('dashboard')}
        >
          <MaterialIcons
            name="dashboard"
            size={24}
            color={activeTab === 'dashboard' ? '#007bff' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'dashboard' && styles.activeText,
            ]}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('profile')}
        >
          <MaterialIcons
            name="person"
            size={24}
            color={activeTab === 'profile' ? '#007bff' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'profile' && styles.activeText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('settings')}
        >
          <MaterialIcons
            name="settings"
            size={24}
            color={activeTab === 'settings' ? '#007bff' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'settings' && styles.activeText,
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  appBar: {
    height: 35, // Reduced height
    backgroundColor: 'white', // Custom background color
    elevation: 2, // Shadow for depth
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeText: {
    color: '#007bff',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff5252',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminLayout;
