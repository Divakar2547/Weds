export const notFound = (_req, res) => res.status(404).json({ message: 'Route not found' })
export const errorHandler = (err, _req, res, _next) => {
  console.error(err)
  if (err.name === 'MulterError') return res.status(400).json({ message: err.message })
  const status = err.statusCode || (err.name === 'ValidationError' || err.name === 'CastError' ? 400 : err.code === 11000 ? 409 : 500)
  res.status(status).json({ message: status === 500 ? 'Internal server error' : err.message })
}
