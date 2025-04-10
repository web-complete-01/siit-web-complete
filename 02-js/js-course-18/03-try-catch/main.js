console.log('Try-catch');

try {
    // const data = `{"name":"Adi", "likes": ["coffee", "programming", "teaching"]}`;
    const data = `{"name":"Adi", "likes": "coffee, programming, teaching"}`;
    const parsedData = JSON.parse(data);

    console.log('');
    console.log('Output data: ');
    console.log(`Person: ${parsedData.name}`);
    console.log('Likes:');
    parsedData.likes.forEach(l => console.log(l));    
} catch (error) {
    console.error(error.message)
}

console.log('Script finished! Must be run always!!!');