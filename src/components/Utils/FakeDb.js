const addToDb = (id) => {
    let appliedJobs = {}
  
    // get Previous data from local storage
    const storedJobs = localStorage.getItem('Applied-Jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs)
    }
  
    // check if job already exists in local storage
    if(appliedJobs[id]){
      return false;
       // job already exists, return false
    }
  
    // add Quantity
    appliedJobs[id] = 1;
    localStorage.setItem('Applied-Jobs', JSON.stringify(appliedJobs));
    return true; 
     // job added successfully, return true
  }
  

// get Stored Data from local storage

const getStoredData = () =>{

    let appliedJobs = {}

    const storedJobs = localStorage.getItem('Applied-Jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

// Remove specific item from local storage
const removeItemFromDb = id =>{
    // get previous data from local storage
    const storedJobs = localStorage.getItem('Applied-Jobs');
    if(storedJobs){
        const appliedJobs = JSON.parse(storedJobs);
        if(id in appliedJobs){
            delete appliedJobs[id];
            localStorage.setItem('Applied-Jobs', JSON.stringify(appliedJobs));
        }
    }
}

// clear all elements from local Storage
const deleteAppliedJobs = () => localStorage.removeItem('Applied-Jobs');

export {
    addToDb,
    getStoredData,
    removeItemFromDb,
    deleteAppliedJobs
}