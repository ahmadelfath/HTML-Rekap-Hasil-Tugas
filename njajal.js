// for (y=1;y<=9;y++){
//     for (x=1;x<=9;x++){
//         if (y==1){
//             document.write(' x ');
//         }
//         else if (x==9){
//             document.write(' x ')
//         }
//         else if (y==x){
//             document.write(' x ')
//         }
//         else{
//             document.write(' o ');
//         }
//     }
//     document.write('<br>')
// }

for (y=1;y<=5;y++){
    for (x=1;x<=5;x++){
        if (y==1){
            document.write(' x ')
        }
        else if (y<=1){
            document.write(' x ')
        }
        else if (y==3){
            document.write(' x ')
        }
        else if (y==5){
            document.write(' x ')
        }
        else if (x==1){
            document.write(' x ')
        }
        else if (x==3){
            document.write(' x ')
        }
        else if (x==5){
            document.write(' x ')
        }
        else{
            document.write(' o ')
        }
    }
    document.write('<br>')
}