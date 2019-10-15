import Category from '../models/Category';

const categoryController = {
  async getCategories(req, res) {
    try {
      const categories = await Category.getCategories();
      console.log(categories);
      res.json({ success: true, categories });
    } catch (error) {
      res.json({ success: false, message: 'error' });
    }
  },
  async addCategory(req, res) {
    console.log(req.body);
    const data = req.body;
    const category = new Category(data);
    try {
      await category.save();
      res.json({ success: true, message: 'category saved successfully' });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: 'difficulty saving category' });
    }
  }
};

export default categoryController;
