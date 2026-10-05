import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type MarketplaceTutor = {
  id: string;

  name: string;
  email: string;

  subjects: string;
  experience: string;
  qualification: string;

  mode: 'Online' | 'Offline' | 'Both';

  bio: string;

  city: string;

  rating: number;
  reviewCount: number;

  hourlyRate: number;

  verified: boolean;
};

type TutorMarketplaceContextType = {
  tutors: MarketplaceTutor[];

  isLoading: boolean;

  addTutor: (
    tutor: MarketplaceTutor
  ) => Promise<void>;

  updateTutor: (
    tutor: MarketplaceTutor
  ) => Promise<void>;

  getTutorById: (
    id: string
  ) => MarketplaceTutor | undefined;

  searchTutors: (
    query: string,
    subject?: string,
    mode?: string
  ) => MarketplaceTutor[];
};

const TUTORS_STORAGE_KEY =
  '@guriva_marketplace_tutors';

const TutorMarketplaceContext =
  createContext<
    TutorMarketplaceContextType | undefined
  >(undefined);

const demoTutors: MarketplaceTutor[] = [
  {
    id: 'TUTOR-001',

    name: 'Aarav Sharma',
    email: 'aarav@guriva.in',

    subjects: 'Mathematics',

    experience: '5 years',

    qualification: 'M.Sc. Mathematics',

    mode: 'Both',

    bio:
      'Experienced Mathematics tutor helping students build strong fundamentals and improve problem-solving skills.',

    city: 'Pune',

    rating: 4.9,
    reviewCount: 124,

    hourlyRate: 500,

    verified: true,
  },

  {
    id: 'TUTOR-002',

    name: 'Priya Mehta',
    email: 'priya@guriva.in',

    subjects:
      'Physics, Mathematics',

    experience: '4 years',

    qualification: 'M.Sc. Physics',

    mode: 'Online',

    bio:
      'Physics educator focused on conceptual clarity, numerical problem solving, and exam preparation.',

    city: 'Mumbai',

    rating: 4.8,
    reviewCount: 96,

    hourlyRate: 450,

    verified: true,
  },

  {
    id: 'TUTOR-003',

    name: 'Rahul Verma',
    email: 'rahul@guriva.in',

    subjects:
      'Chemistry, Biology',

    experience: '6 years',

    qualification: 'M.Sc. Chemistry',

    mode: 'Offline',

    bio:
      'Passionate science tutor helping students understand difficult concepts through practical examples.',

    city: 'Pune',

    rating: 4.7,
    reviewCount: 82,

    hourlyRate: 400,

    verified: true,
  },

  {
    id: 'TUTOR-004',

    name: 'Sneha Kapoor',
    email: 'sneha@guriva.in',

    subjects:
      'English, Mathematics',

    experience: '3 years',

    qualification: 'B.Ed.',

    mode: 'Online',

    bio:
      'Friendly tutor helping students strengthen academic foundations and communication skills.',

    city: 'Delhi',

    rating: 4.6,
    reviewCount: 61,

    hourlyRate: 350,

    verified: true,
  },
];

export function TutorMarketplaceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tutors, setTutors] =
    useState<MarketplaceTutor[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    restoreTutors();
  }, []);

  const restoreTutors = async () => {
    try {
      const savedTutors =
        await AsyncStorage.getItem(
          TUTORS_STORAGE_KEY
        );

      if (savedTutors) {
        setTutors(
          JSON.parse(savedTutors)
        );
      } else {
        await AsyncStorage.setItem(
          TUTORS_STORAGE_KEY,
          JSON.stringify(demoTutors)
        );

        setTutors(demoTutors);
      }
    } catch (error) {
      console.log(
        'Failed to restore Guriva tutors:',
        error
      );

      setTutors(demoTutors);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTutors = async (
    newTutors: MarketplaceTutor[]
  ) => {
    await AsyncStorage.setItem(
      TUTORS_STORAGE_KEY,
      JSON.stringify(newTutors)
    );

    setTutors(newTutors);
  };

  const addTutor = async (
    tutor: MarketplaceTutor
  ) => {
    const updatedTutors = [
      ...tutors,
      tutor,
    ];

    await saveTutors(updatedTutors);
  };

  const updateTutor = async (
    tutor: MarketplaceTutor
  ) => {
    const updatedTutors =
      tutors.map((item) =>
        item.id === tutor.id
          ? tutor
          : item
      );

    await saveTutors(updatedTutors);
  };

  const getTutorById = (
    id: string
  ) => {
    return tutors.find(
      (tutor) => tutor.id === id
    );
  };

  const searchTutors = (
    query: string,
    subject?: string,
    mode?: string
  ) => {
    const normalizedQuery =
      query.trim().toLowerCase();

    const normalizedSubject =
      subject?.trim().toLowerCase();

    return tutors.filter((tutor) => {
      const matchesQuery =
        !normalizedQuery ||
        tutor.name
          .toLowerCase()
          .includes(normalizedQuery) ||
        tutor.subjects
          .toLowerCase()
          .includes(normalizedQuery) ||
        tutor.city
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesSubject =
        !normalizedSubject ||
        tutor.subjects
          .toLowerCase()
          .includes(
            normalizedSubject
          );

      const matchesMode =
        !mode ||
        mode === 'All' ||
        tutor.mode === mode ||
        tutor.mode === 'Both';

      return (
        matchesQuery &&
        matchesSubject &&
        matchesMode
      );
    });
  };

  return (
    <TutorMarketplaceContext.Provider
      value={{
        tutors,
        isLoading,

        addTutor,
        updateTutor,

        getTutorById,
        searchTutors,
      }}
    >
      {children}
    </TutorMarketplaceContext.Provider>
  );
}

export function useTutorMarketplace() {
  const context = useContext(
    TutorMarketplaceContext
  );

  if (!context) {
    throw new Error(
      'useTutorMarketplace must be used inside TutorMarketplaceProvider'
    );
  }

  return context;
}