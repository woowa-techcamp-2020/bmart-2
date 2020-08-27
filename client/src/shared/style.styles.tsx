export interface TImageUrl {
  url: string;
}

export const backgroundUrlImage = (url: string) => `
  background-image: url('${url}'); 
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;
