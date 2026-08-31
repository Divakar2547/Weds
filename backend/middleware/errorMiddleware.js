export const notFound = (_req, res) => res.status(404).json({ message: 'Route not found' })
export const errorHandler = (err, _req, res, _next) => { console.error(err); const status = err.name === 'ValidationError' ? 400 : err.code === 11000 ? 409 : 500; res.status(status).json({ message: status === 500 ? 'Internal server error' : err.message }) }
