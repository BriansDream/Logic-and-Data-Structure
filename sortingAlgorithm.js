// Bubble Sort (Slowlest sorting algorithm) 
// ways of working 
// Move along the array several times, compares adjacent values and swaps them
const DataArray = () => {
    const dataArr = [5,4,1,2];
    return dataArr;
}

const BubbleSort = (DataArray) => { 
    // Proses perbandingan data selalu dimulai dari awal
    // Lebih banyak proses yang dilakukan
    let temp;
    // 1 time outter loop run, it has to finish all process in inner loop
    // For example If length = 4, 1 time loop have to wait 4 times process in inner loop 
    for(let outterIndex = 0; outterIndex < DataArray.length; outterIndex++) {
     
        for(let innerIndex = 0; innerIndex < DataArray.length; innerIndex++) {
        
               if(DataArray[innerIndex] > DataArray[innerIndex+1]) {
             
                // Store the smaller value (temp)
                temp = DataArray[innerIndex+1];
                DataArray[innerIndex+1] = DataArray[innerIndex];
                DataArray[innerIndex] = temp;
               
            }
          
        }
    }
    }


    // Selection Sort
    // Ways of work 
    // Move from the start array and compares with other array elements
    // after the value is found then swap value 
    // the value that has been set will not be compared again

    //5412
    function SelectionSort(DataArray) {
        let startValue;
        let temp;
        for(let outterIndex = 0; outterIndex < DataArray.length; outterIndex++) {
            // Hold index outter index
            startValue = outterIndex;
            console.log('hold outter index: ', startValue)
            for(let innerIndex = outterIndex; innerIndex < DataArray.length; innerIndex++) { 
                console.log('index StartValue before : ', DataArray[startValue], 'Inner index: ', DataArray[innerIndex]);
                if(DataArray[startValue] > DataArray[innerIndex]) { 
                  startValue = innerIndex;
                }
            }
            // Hold smaller value
            temp = DataArray[startValue];
            DataArray[startValue] = DataArray[outterIndex];
            DataArray[outterIndex] = temp;
            console.log(DataArray);
          
        }

    }




const runApp = () => {
    DataArray();
    // BubbleSort(DataArray());
    SelectionSort(DataArray());
}

runApp();