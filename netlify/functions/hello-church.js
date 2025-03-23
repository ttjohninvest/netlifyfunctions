exports.handler=async function(event,context) {
  console.log("in the netlify function")
    const data = { message:"Hello Church 2" };

    return {
      statusCode: 200,
      body:JSON.stringify(data),
    };
};