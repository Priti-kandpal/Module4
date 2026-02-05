const supabase = require('../config/supabase');

exports.createTodo = async (req, res) => {
  const { title } = req.body;

  const { error } = await supabase.from('todos').insert([
    { title, userId: req.user.userId }
  ]);

  if (error) return res.status(400).json({ message: error.message });

  res.status(201).json({ message: 'Todo created' });
};

exports.getTodos = async (req, res) => {
  const { data } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', req.user.userId);

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  const { data } = await supabase
    .from('todos')
    .update(req.body)
    .eq('id', id)
    .eq('userId', req.user.userId);

  if (!data || data.length === 0) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  res.json({ message: 'Todo updated' });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('userId', req.user.userId);

  if (!data || data.length === 0) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  res.json({ message: 'Todo deleted' });
};
