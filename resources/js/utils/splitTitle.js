export default (str)=>{
    const splitStr = str.split(' ');
    const tail = splitStr.pop();
    return [splitStr.join(' '), tail]
}