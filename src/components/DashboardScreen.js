import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  useTheme,
  Surface,
} from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { useDispatch } from 'react-redux';
import CounterDisplay from './CounterDisplay'; // Check if it's default export
import CounterControls from './CounterControls'; // Check if it's default export

function DashboardScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();

  const stats = {
    totalUsers: 1200,
    sales: 2500,
    revenue: 13450,
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [3000, 5000, 4000, 7000, 8000, 12000],
        strokeWidth: 2,
      },
    ],
  };

  const handleSubmit = () => {
    if (name && age && dob) {
      Alert.alert(
        'Form Submitted',
        `Hello, ${name}! Your info has been submitted.`
      );
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title style={styles.title}>Dashboard</Title>

        <Surface style={styles.centerContainer}>
          <CounterDisplay />
          <CounterControls />
        </Surface>

        <Card style={styles.statCard}>
          <Card.Content>
            <Title>Total Users</Title>
            <Paragraph style={styles.statValue}>{stats.totalUsers}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content>
            <Title>Sales</Title>
            <Paragraph style={styles.statValue}>{stats.sales}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content>
            <Title>Revenue</Title>
            <Paragraph style={styles.statValue}>${stats.revenue}</Paragraph>
          </Card.Content>
        </Card>

        <Surface style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Sales Over Time</Text>
          <LineChart
            data={chartData}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.background,
              decimalPlaces: 0,
              color: (opacity = 1) => theme.colors.primary,
              labelColor: (opacity = 1) => theme.colors.text,
            }}
            bezier
          />
        </Surface>

        <Card style={styles.formContainer}>
          <Card.Content>
            <Title>Enter Your Information</Title>

            <TextInput
              label="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Date of Birth (YYYY-MM-DD)"
              value={dob}
              onChangeText={setDob}
              style={styles.input}
              mode="outlined"
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  centerContainer: {
    marginVertical: 20,
    padding: 16,
    elevation: 2,
    borderRadius: 10,
  },
  statCard: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    marginTop: 30,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default DashboardScreen;
