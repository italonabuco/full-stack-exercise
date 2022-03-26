const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
});

class TeamMember extends Sequelize.Model {}

TeamMember.init(
    {
        // attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        story: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        favoriteColor: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        photoUrl: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'TeamMembers',
        // options
    }
);

module.exports = {
    sequelize,
    TeamMember,
};
