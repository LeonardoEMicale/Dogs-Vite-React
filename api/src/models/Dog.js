const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
    },
    minHeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 150 },
    },
    maxHeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 150 },
    },
    minWeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 82 },
    },
    maxWeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 82 },
    },
    life_span: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 20 },
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false,
  }
  );
};

