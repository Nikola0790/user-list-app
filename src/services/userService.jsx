const url = "https://randomuser.me/api/?results=15";

export const getUsers = () => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      return users.results.map((data) => {
        return {
          name: data.name.first,
          email: data.email,
          date: data.dob.date,
          pictureList: data.picture.thumbnail,
          pictureCard: data.picture.large,
        };
      });
    });
};
