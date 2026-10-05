import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type UserRole = 'student' | 'tutor';

export type TutorProfile = {
  subjects: string;
  experience: string;
  qualification: string;
  mode: 'Online' | 'Offline' | 'Both';
  bio: string;
};

export type StudentProfile = {
  school: string;
  grade: string;
  city: string;
  learningGoals: string;
};

type User = {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  tutorProfile?: TutorProfile;
  studentProfile?: StudentProfile;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (
    email: string,
    password: string,
    role: UserRole
  ) => Promise<boolean>;

  signup: (
    name: string,
    email: string,
    phone: string,
    password: string,
    role: UserRole
  ) => Promise<boolean>;

  updateTutorProfile: (
    profile: TutorProfile
  ) => Promise<void>;

  updateStudentProfile: (
    profile: StudentProfile
  ) => Promise<void>;

  logout: () => Promise<void>;
};

const AUTH_STORAGE_KEY = '@guriva_auth_user';

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    try {
      const savedUser =
        await AsyncStorage.getItem(
          AUTH_STORAGE_KEY
        );

      if (savedUser) {
        const parsedUser: User =
          JSON.parse(savedUser);

        setUser(parsedUser);
      }
    } catch (error) {
      console.log(
        'Failed to restore Guriva user:',
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  const saveUser = async (newUser: User) => {
    try {
      await AsyncStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(newUser)
      );

      setUser(newUser);
    } catch (error) {
      console.log(
        'Failed to save Guriva user:',
        error
      );
    }
  };

  const login = async (
    email: string,
    password: string,
    role: UserRole
  ) => {
    if (!email.trim() || !password.trim()) {
      return false;
    }

    const newUser: User = {
      name:
        role === 'student'
          ? 'Student'
          : 'Tutor',
      email: email.trim(),
      phone: '',
      role,
    };

    await saveUser(newUser);

    return true;
  };

  const signup = async (
    name: string,
    email: string,
    phone: string,
    password: string,
    role: UserRole
  ) => {
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim()
    ) {
      return false;
    }

    const newUser: User = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role,
    };

    await saveUser(newUser);

    return true;
  };

  const updateTutorProfile = async (
    profile: TutorProfile
  ) => {
    if (!user) {
      return;
    }

    const updatedUser: User = {
      ...user,
      tutorProfile: profile,
    };

    await saveUser(updatedUser);
  };

  const updateStudentProfile = async (
    profile: StudentProfile
  ) => {
    if (!user) {
      return;
    }

    const updatedUser: User = {
      ...user,
      studentProfile: profile,
    };

    await saveUser(updatedUser);
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(
        AUTH_STORAGE_KEY
      );
    } catch (error) {
      console.log(
        'Failed to clear Guriva user:',
        error
      );
    }

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        updateTutorProfile,
        updateStudentProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
}