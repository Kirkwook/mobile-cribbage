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
import QuizPage from "../screens/display_questions_test";
import QuizPageDB from "../screens/display_questions_DB";
// import StudentQuizScreen from "../screens/studentQuizScreen";
import StudentQuizScreen from "../screens/studentQuizScreen";

const screens = {
  StudentQuizScreen: {
    screen: StudentQuizScreen,
    navigationOptions: {
      title: "studentQuizScreen",
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
