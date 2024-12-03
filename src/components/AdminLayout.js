import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const AdminLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Overview</Text>

            {/* Graph */}
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                  },
                ],
              }}
              width={screenWidth * 0.9} // Adjust width
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              chartConfig={{
                backgroundColor: '#f5f5f5',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={styles.chart}
            />

            {/* Cards */}
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Revenue</Text>
                <Text style={styles.cardValue}>$15,230</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Users</Text>
                <Text style={styles.cardValue}>2,450</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Tasks</Text>
                <Text style={styles.cardValue}>120</Text>
              </View>
            </View>
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
      {/* Custom App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => alert('Menu')} style={styles.icon}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>Admin Panel</Text>
        <View style={styles.appBarActions}>
          <TouchableOpacity
            onPress={() => alert('Notifications')}
            style={styles.icon}
          >
            <MaterialIcons name="notifications" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout} style={styles.icon}>
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>{renderContent()}</View>

      {/* Bottom Navigation */}
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
  appBar: {
    height: Platform.OS === 'ios' ? 80 : 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 30 : 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  appTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  appBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
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
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: Platform.OS === 'ios' ? 30 : 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
  activeText: {
    color: '#007bff',
  },
});

export default AdminLayout;
