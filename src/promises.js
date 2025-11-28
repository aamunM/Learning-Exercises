//Promises with boolean if else statements

const isUnemployed = false;
const isLookingForJobs = false;

function personPromise() {
  return new Promise((resolve, reject) => {
    if (isLookingForJobs) {
      reject({
        name: "Guy",
        message: "looking for a job",
      });
    } else if (isUnemployed) {
      reject({
        name: "Guy",
        message: "not employed",
      });
    } else {
      resolve("Guy is employed");
    }
  });
}

// personPromise()
//   .then((message) => {
//     console.log("Good News: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " is " + error.message);
//   });

//Promises with method chaining

const hasLeftJob = true;
const findingNewJob = true;
const hasFoundNewJob = true;
const hasStartedNewJob = true;

function leaveJob() {
  return new Promise((resolve, reject) => {
    if (hasLeftJob) {
      resolve("Guy is now leaving the Job");
    } else {
      reject("Guy still has a Job");
    }
  });
}

function findNewJob() {
  return new Promise((resolve, reject) => {
    if (findingNewJob) {
      resolve("Guy is finding a new Job");
    } else {
      reject("Guy is NOT finding a new Job");
    }
  });
}

function foundNewJob() {
  return new Promise((resolve, reject) => {
    if (hasFoundNewJob) {
      resolve("Guy has found a new Job");
    } else {
      reject("Guy has NOT found a new Job");
    }
  });
}

function startNewJob() {
  return new Promise((resolve, reject) => {
    if (hasStartedNewJob) {
      resolve("Guy is starting his new Job");
    } else {
      reject("Guy has NOT started his new Job");
    }
  });
}

// leaveJob()
//   .then((message) => {
//     console.log(message);
//     return findNewJob();
//   })
//   .then((message) => {
//     console.log(message);
//     return foundNewJob();
//   })
//   .then((message) => {
//     console.log(message);
//     return startNewJob();
//   })
//   .then((message) => {
//     console.log(message);
//     console.log("Guy is all set");
//   })
//   .catch((error) => console.error(error))

//New Promise

const userData = {
  userID: "ABC123",
  userName: "Aamun",
  userComment: "Testing random Promises",
  userPost: "Post Message",
};

function getAllUserData() {
  return new Promise((resolve, reject) => {
    if (userData.userName) {
      resolve(userData.userName);
    } else {
      reject("Error");
    }
  });
}

// const promise = getAllUserData();
// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("Finished");
//   });

function getDogFacts(breedId = "") {
  return new Promise((res, rej) => {
    const url = `https://dogapi.dog/api/v2/breeds/${breedId}`;
    const response = fetch(url);

    response
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => res(data))
      .catch((err) => rej(`Error: ${err.message}`));
  });
}

const allDogs = getDogFacts();
const afghanHoundDog = getDogFacts("dd9362cc-52e0-462d-b856-fccdcf24b140");
const dreverDog = getDogFacts("bc97ff27-930e-4d3a-95a8-5a8f2ad4c0e2");

afghanHoundDog
  .then(
    ({
      data: {
        attributes: { description, name, life, hypoallergenic },
      },
    }) => {
      console.log("Breed Name: ", name);
      console.log("Description: ", description);
      console.log("Life Span:", life.min, "-", life.max, "years");
      console.log("Hypoallergenic: ", hypoallergenic);
    }
  )
  .catch((err) => console.error(err));

// allDogs
//   .then(({ data }) => console.log(data))
//   .catch((err) => console.error(err));

dreverDog.then(({ data: { attributes } }) => {
  console.log(`Name: ${attributes.name}`);
  console.log(`Description: ${attributes.description}`);
});
