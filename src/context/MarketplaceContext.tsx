import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type EnquiryStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'cancelled';

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'completed'
  | 'cancelled';

export type Enquiry = {
  id: string;

  studentEmail: string;
  studentName: string;

  tutorEmail: string;
  tutorName: string;

  subject: string;
  message: string;

  createdAt: string;

  status: EnquiryStatus;
};

export type Booking = {
  id: string;

  studentEmail: string;
  studentName: string;

  tutorEmail: string;
  tutorName: string;

  subject: string;

  date: string;
  time: string;

  mode: 'Online' | 'Offline' | 'Both';

  amount: number;

  createdAt: string;

  status: BookingStatus;

  paymentStatus:
    | 'pending'
    | 'paid'
    | 'failed'
    | 'refunded';
};

type CreateEnquiryInput = {
  studentEmail: string;
  studentName: string;

  tutorEmail: string;
  tutorName: string;

  subject: string;
  message: string;
};

type CreateBookingInput = {
  studentEmail: string;
  studentName: string;

  tutorEmail: string;
  tutorName: string;

  subject: string;

  date: string;
  time: string;

  mode: 'Online' | 'Offline' | 'Both';

  amount: number;
};

type MarketplaceContextType = {
  enquiries: Enquiry[];
  bookings: Booking[];

  isLoading: boolean;

  createEnquiry: (
    data: CreateEnquiryInput
  ) => Promise<Enquiry>;

  updateEnquiryStatus: (
    id: string,
    status: EnquiryStatus
  ) => Promise<void>;

  createBooking: (
    data: CreateBookingInput
  ) => Promise<Booking>;

  updateBookingStatus: (
    id: string,
    status: BookingStatus
  ) => Promise<void>;

  updatePaymentStatus: (
    id: string,
    paymentStatus:
      | 'pending'
      | 'paid'
      | 'failed'
      | 'refunded'
  ) => Promise<void>;

  getStudentEnquiries: (
    studentEmail: string
  ) => Enquiry[];

  getTutorEnquiries: (
    tutorEmail: string
  ) => Enquiry[];

  getStudentBookings: (
    studentEmail: string
  ) => Booking[];

  getTutorBookings: (
    tutorEmail: string
  ) => Booking[];
};

const ENQUIRIES_STORAGE_KEY =
  '@guriva_enquiries';

const BOOKINGS_STORAGE_KEY =
  '@guriva_bookings';

const MarketplaceContext =
  createContext<
    MarketplaceContextType | undefined
  >(undefined);

export function MarketplaceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [enquiries, setEnquiries] =
    useState<Enquiry[]>([]);

  const [bookings, setBookings] =
    useState<Booking[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    restoreMarketplaceData();
  }, []);

  const restoreMarketplaceData =
    async () => {
      try {
        const [
          savedEnquiries,
          savedBookings,
        ] = await Promise.all([
          AsyncStorage.getItem(
            ENQUIRIES_STORAGE_KEY
          ),
          AsyncStorage.getItem(
            BOOKINGS_STORAGE_KEY
          ),
        ]);

        if (savedEnquiries) {
          setEnquiries(
            JSON.parse(savedEnquiries)
          );
        }

        if (savedBookings) {
          setBookings(
            JSON.parse(savedBookings)
          );
        }
      } catch (error) {
        console.log(
          'Failed to restore Guriva marketplace data:',
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

  const saveEnquiries = async (
    newEnquiries: Enquiry[]
  ) => {
    await AsyncStorage.setItem(
      ENQUIRIES_STORAGE_KEY,
      JSON.stringify(newEnquiries)
    );

    setEnquiries(newEnquiries);
  };

  const saveBookings = async (
    newBookings: Booking[]
  ) => {
    await AsyncStorage.setItem(
      BOOKINGS_STORAGE_KEY,
      JSON.stringify(newBookings)
    );

    setBookings(newBookings);
  };

  const createEnquiry = async (
    data: CreateEnquiryInput
  ) => {
    const newEnquiry: Enquiry = {
      id: `ENQ-${Date.now()}`,

      studentEmail: data.studentEmail,
      studentName: data.studentName,

      tutorEmail: data.tutorEmail,
      tutorName: data.tutorName,

      subject: data.subject,
      message: data.message,

      createdAt: new Date().toISOString(),

      status: 'pending',
    };

    const updatedEnquiries = [
      newEnquiry,
      ...enquiries,
    ];

    await saveEnquiries(updatedEnquiries);

    return newEnquiry;
  };

  const updateEnquiryStatus = async (
    id: string,
    status: EnquiryStatus
  ) => {
    const updatedEnquiries =
      enquiries.map((enquiry) =>
        enquiry.id === id
          ? {
              ...enquiry,
              status,
            }
          : enquiry
      );

    await saveEnquiries(updatedEnquiries);
  };

  const createBooking = async (
    data: CreateBookingInput
  ) => {
    const newBooking: Booking = {
      id: `BOOK-${Date.now()}`,

      studentEmail: data.studentEmail,
      studentName: data.studentName,

      tutorEmail: data.tutorEmail,
      tutorName: data.tutorName,

      subject: data.subject,

      date: data.date,
      time: data.time,

      mode: data.mode,

      amount: data.amount,

      createdAt: new Date().toISOString(),

      status: 'pending',

      paymentStatus: 'pending',
    };

    const updatedBookings = [
      newBooking,
      ...bookings,
    ];

    await saveBookings(updatedBookings);

    return newBooking;
  };

  const updateBookingStatus = async (
    id: string,
    status: BookingStatus
  ) => {
    const updatedBookings =
      bookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status,
            }
          : booking
      );

    await saveBookings(updatedBookings);
  };

  const updatePaymentStatus = async (
    id: string,
    paymentStatus:
      | 'pending'
      | 'paid'
      | 'failed'
      | 'refunded'
  ) => {
    const updatedBookings =
      bookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              paymentStatus,
            }
          : booking
      );

    await saveBookings(updatedBookings);
  };

  const getStudentEnquiries = (
    studentEmail: string
  ) => {
    return enquiries.filter(
      (enquiry) =>
        enquiry.studentEmail.toLowerCase() ===
        studentEmail.toLowerCase()
    );
  };

  const getTutorEnquiries = (
    tutorEmail: string
  ) => {
    return enquiries.filter(
      (enquiry) =>
        enquiry.tutorEmail.toLowerCase() ===
        tutorEmail.toLowerCase()
    );
  };

  const getStudentBookings = (
    studentEmail: string
  ) => {
    return bookings.filter(
      (booking) =>
        booking.studentEmail.toLowerCase() ===
        studentEmail.toLowerCase()
    );
  };

  const getTutorBookings = (
    tutorEmail: string
  ) => {
    return bookings.filter(
      (booking) =>
        booking.tutorEmail.toLowerCase() ===
        tutorEmail.toLowerCase()
    );
  };

  return (
    <MarketplaceContext.Provider
      value={{
        enquiries,
        bookings,

        isLoading,

        createEnquiry,
        updateEnquiryStatus,

        createBooking,
        updateBookingStatus,

        updatePaymentStatus,

        getStudentEnquiries,
        getTutorEnquiries,

        getStudentBookings,
        getTutorBookings,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(
    MarketplaceContext
  );

  if (!context) {
    throw new Error(
      'useMarketplace must be used inside MarketplaceProvider'
    );
  }

  return context;
}