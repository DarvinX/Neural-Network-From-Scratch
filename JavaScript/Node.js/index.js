/* 
    The workflow

*/

//Functions
//create matrix
function create_matrix(result_col, result_row, random=false){
    function random_array(length, all_zero=false){
        let arr = Array(length);
        for(j=0;j<length;j++){
            arr[j] = all_zero ? 0:Math.random();
            //console.log(arr[j])
        }
        return arr;
    }

    let result = Array(result_row);
    for(i=0; i< result_row; i++){
        result[i] = random_array(result_col, !random);
    }

    return result;
}

//console.log(create_matrix(5,6))
//matrix multiplication
function mat_mul(first_matrix, second_matrix){
    //assuming the matrixes will of proper shape
    let dims = [[first_matrix[0].length, first_matrix.length],
            [second_matrix[0].length, second_matrix.length]];

    let result_row = dims[1][1];
    let result_common = dims[0][1];
    let result_col = dims[0][0];
    
    //empty result array
    let result = create_matrix(result_col, result_row);

    for (row=0; row < result_row; row++){
        for (col=0; col < result_col; col ++){
            for(k=0; k<result_common;k++ ){
                result[col][row] += (first_matrix[col][k]*second_matrix[k][row]);
            }
        }
    }

    return result;
}

//sigmoid function
function sigmoid(num, derivative=false){
    
}
//Relu
function relu(num, derivative=false, leak=0){
    return derivative ? 1:Math.max(num, leak*num);
}
