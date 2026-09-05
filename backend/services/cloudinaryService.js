import cloudinary, { configured } from '../config/cloudinary.js'

export async function uploadImage(file) {
  if (!configured) return null
  const uploaded = await cloudinary.uploader.upload(file.path, { folder: process.env.CLOUDINARY_FOLDER || 'wedding-invitation', resource_type: 'image' })
  return uploaded.secure_url
}
