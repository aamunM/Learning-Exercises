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
const hasStartedNewJob = false;

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

leaveJob()
  .then((message) => {
    console.log(message);
    return findNewJob();
  })
  .then((message) => {
    console.log(message);
    return foundNewJob();
  })
  .then((message) => {
    console.log(message);
    return startNewJob();
  })
  .then((message) => {
    console.log(message);
    console.log("Guy is all set");
  })
  .catch((error) => console.error(error));
