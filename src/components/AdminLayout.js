import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const AdminLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-screenWidth * 0.75))[0];

  const toggleSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: isSidebarOpen ? -screenWidth * 0.75 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Overview and Analytics</Text>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>Manage your profile here.</Text>
          </View>
        );
      case 'settings':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>
              Configure your application settings.
            </Text>
            <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', tab: 'dashboard' },
    { name: 'Profile', icon: 'person', tab: 'profile' },
    { name: 'Settings', icon: 'settings', tab: 'settings' },
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Animated.View
        style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
      >
        <Text style={styles.sidebarTitle}>Menu</Text>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.tab}
            style={[
              styles.menuItem,
              activeTab === item.tab && styles.activeMenuItem,
            ]}
            onPress={() => {
              setActiveTab(item.tab);
              toggleSidebar();
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color={activeTab === item.tab ? '#fff' : '#004085'}
            />
            <Text
              style={[
                styles.menuText,
                activeTab === item.tab && styles.activeMenuText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.icon}>
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>Admin Panel</Text>
        <View style={styles.appBarActions}>
          <TouchableOpacity
            onPress={() => alert('Notifications')}
            style={styles.icon}
          >
            <MaterialIcons name="notifications" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout} style={styles.icon}>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>{renderContent()}</View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.tab}
            style={styles.navItem}
            onPress={() => setActiveTab(item.tab)}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color={activeTab === item.tab ? '#004085' : '#666'}
            />
            <Text
              style={[
                styles.navText,
                activeTab === item.tab && styles.activeText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  appBar: {
    height: 70,
    backgroundColor: '#004085',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  appTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    width: '75%',
    height: '100%',
    backgroundColor: '#004085',
    padding: 20,
    zIndex: 10,
    elevation: 10,
  },
  sidebarTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    color: 'white',
  },
  activeMenuItem: {
    backgroundColor: '#0056b3',
  },
  activeMenuText: {
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004085',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6c757d',
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
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  activeText: {
    color: '#004085',
    fontWeight: 'bold',
  },
});

export default AdminLayout;
