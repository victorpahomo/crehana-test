import { gql } from "@apollo/client";

/**
 * Get continents query
 * @returns continents
 */
export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

/**
 * Get countries query
 * @returns countries
 */
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

/**
 * Get country query
 * @param code - Country code (ISO 3166-1 alpha-2)
 * @returns country
 */
export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;
