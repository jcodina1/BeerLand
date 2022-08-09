const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Seller , Comment, Score,User, Support} = require('../db.js')

const createSupport = async (req, res) => {
    const { name, email, comment } = req.body;
    try {
        const userExist = await User.findOne({ where: { email: email } });
        if (!userExist) {
            const support = await Support.create({
                isUser: false,
                email,
                name,
                comment,
                date: new Date(),
                status: 0
            });
            return res.status(200).json({
                ok: true,
                msg: 'Support created',
                support
            });1
        }
        const support = await Support.create({
            isUser: true,
            email: userExist.email,
            name: userExist.name,
            comment,
            date: new Date(),
            status: 0,
            userId:userExist.id
        });
        const supportWithUser = await Support.findOne({
            where: { idSupport: support.idSupport },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: {
                model: User,
                attributes: ['name', 'email']
            }
        });
        res.json({
            ok: true,
            supportWithUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

module.exports = {
createSupport
  };