export function getProcessTypeEncounters(data) {
    // Object to store the number of occurrences for each process type
    const processEncounters = {};

    // Iterate through the data array
    for (let i = 0; i < data.length; i++) {
        const processName = data[i]['process-name']; // Extract the process name

        // If the process name hasn't been encountered before, initialize it in the object
        if (processEncounters[processName] == null) {
            processEncounters[processName] = { occurrence: 1, processName: processName };
        } else {
            // If the process name exists, increment its occurrence count
            processEncounters[processName].occurrence += 1;
        }
    }

    // Convert the processEncounters object into an array of objects
    const resultArray = Object.keys(processEncounters).map((key) => {
        return { 'process-name': key, occurrence: processEncounters[key].occurrence };
    });

    // Log the resulting array to the console (for debugging)
    console.log(resultArray);
    return resultArray;
}
