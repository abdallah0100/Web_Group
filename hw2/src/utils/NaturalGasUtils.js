export function getProcessTypeEncounters(data) {
    const processEncounters = {};

    for (let i = 0; i < data.length; i++) {
        const processName = data[i]['process-name'];

        if (processEncounters[processName] == null) {
            processEncounters[processName] = { occurrence: 1, processName: processName};
        } else {
            processEncounters[processName].occurrence += 1;
        }
    }

   // Convert the processEncounters object to an array
    const resultArray = Object.keys(processEncounters).map((key) => {
    return { 'process-name': key, occurrence: processEncounters[key].occurrence };
    });

    console.log(resultArray);
    return resultArray;
}
