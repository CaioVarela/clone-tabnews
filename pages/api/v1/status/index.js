function status(request, response) {
  response.status(200).json({ status: "Tudo com as orelhas na cabeça..." });
}

export default status;
