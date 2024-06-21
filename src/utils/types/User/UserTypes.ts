export interface User {
    name: {
      first: string;
      last: string;
    };
    location: {
      state: string;
      country: string;
      city: string;
    };
    email: string;
    phone: string;
    cell: string;
    nat: string;
    dob: {
      date: string;
    };
    picture: {
      large: string;
    };
  }
  