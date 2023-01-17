module.exports.FormateData = (data) => {

  if (data) {
    const { message, response_data, status } = data;
    return { status, message, response_data }
  } else {
    throw new Error('Data Not found!')
  }

}
