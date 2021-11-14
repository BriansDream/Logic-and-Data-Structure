// Bubble Sort (Slowlest sorting algorithm) 
// ways of working 
// Move along the array several times, compares adjacent values and swaps them
const DataArray = () => {
    const dataArr = [5,4,2,1,3,10];
    return dataArr;
}

const BubbleSort = (DataArray) => { 
    // Proses perbandingan data selalu dimulai dari awal
    // Lebih banyak proses yang dilakukan
    let temp;
    // 1 time outter loop run, it has to finish all process in inner loop
    // For example If length = 4, 1 time loop have to wait 4 times process in inner loop 
    for(let outterIndex = 0; outterIndex <= DataArray.length-1; outterIndex++) {
     
        for(let innerIndex = 0; innerIndex < DataArray.length; innerIndex++) {
        
               if(DataArray[innerIndex] > DataArray[innerIndex+1]) {
             console.log('before compare: ', DataArray[innerIndex], ' before: ', DataArray[innerIndex+1]);
                // Store the smaller value (temp)
                temp = DataArray[innerIndex+1];
                console.log('temp: ', temp);
                DataArray[innerIndex+1] = DataArray[innerIndex];
                console.log('inner +1: ',DataArray[innerIndex+1])
                DataArray[innerIndex] = temp;
                console.log('inner: ', DataArray[innerIndex]);
                console.log(DataArray);
                console.log('\n');
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
        let min;
        let temp;
        for(let outterIndex = 0; outterIndex < DataArray.length; outterIndex++) {
            // Hold index outter index
            min = outterIndex;
            for(let innerIndex = outterIndex; innerIndex < DataArray.length; innerIndex++) { 
               
                if(DataArray[min] > DataArray[innerIndex]) { 
                    min = innerIndex;
                }
            }
            // Hold smaller value
            temp = DataArray[min];
            console.log('temp: ', temp);
            DataArray[min] = DataArray[outterIndex];
            console.log('data array min: ', DataArray[min]);
            DataArray[outterIndex] = temp;
            console.log('data array outter: ',DataArray[outterIndex]);
            console.log(DataArray);
         
          
        }

    }


    // Insertion Sort
    // Sorting bunch of data by comparing all data from index 1 / data ke 2
    // Compare index 1 with index -1
    // And Start from the data continous grow until data.length-1 and compare the data until index-1
    // 5421
    const InsertionSort = (DataArray) => {
        let temp;
        for(let outter = 1; outter <= DataArray.length-1; outter++) {
            let inner = outter;
            while(inner > 0) {
                if(DataArray[inner] < DataArray[inner-1]) {
                    console.log('before compare: ', DataArray[inner], 'Before: ', DataArray[inner-1]);
                    temp = DataArray[inner];
                    console.log('Temp: ', temp);
                    DataArray[inner] = DataArray[inner-1];
                    console.log('Data inner -1: ', DataArray[inner-1]);
                    DataArray[inner-1] = temp;
                    console.log('Data inner: ', DataArray[inner]);
                    console.log(DataArray);
                  console.log('\n');
                }
                inner--;
            }
        }
    }
    // [5,4,2,1,3,10];
 const MergeSort = (n,daun) => {
   
 }

 

const runApp = () => {
    DataArray();
    // BubbleSort(DataArray());
    // SelectionSort(DataArray());
    // InsertionSort(DataArray());
    MergeSort(DataArray().length,'top');
 
}

runApp();