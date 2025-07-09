function status(request, response) {
  response.status(200).json({
    resposta: "ok",
  });
}

export default status;
