import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
    },
    featuredImage: {
      type: String,
    },
    category: {
      type: String,
      default: 'Berita',
    },
    author: {
      type: String,
      default: 'Admin',
    },
    slug: {
      type: String,
      unique: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

NewsSchema.pre('save', async function(next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  next();
});

export const News = mongoose.models.News || mongoose.model('News', NewsSchema);
