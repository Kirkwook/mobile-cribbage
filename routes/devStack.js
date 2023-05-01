import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import ForgotPassword from "../screens/forgotpassword";
import InternalUserDashboard from "../screens/internal_dashboard";
import StudentUserDashboard from "../screens/student_dashboard";
import ProfessorUserDashboard from "../screens/professor_dashboard";
import SessionManagerDashboard from "../screens/session_manager";
import AccountEditingPage from "../screens/edit_account";
import studentsQuizScreen from "../screens/studentQuizScreen";

const screens = {
  studentsQuizScreen: {
    screen: studentsQuizScreen,
    navigationOptions: {
      title: "studentsQuizScreen",
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
    },
  },
  AccountEditingPage: {
    screen: AccountEditingPage,
    navigationOptions: {
      title: "AccountEditingPage",
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: "Forgot Password?",
    },
  },
};

const DevStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default createAppContainer(DevStack);
