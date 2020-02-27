import User from '../models/User';
import File from '../models/File';

class ProviderCOntroller {
  async index(req, res) {
    const provider = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.status(200).json(provider);
  }
}

export default new ProviderCOntroller();