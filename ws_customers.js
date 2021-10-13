const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_customers', {
    PKCustomerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    EmailAddress: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MobileNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Status: {
      type: DataTypes.ENUM('Enabled','Disabled'),
      allowNull: false,
      defaultValue: "Enabled"
    },
    PasswordRecoveryCode: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    PasswordRecoveryCodeExpire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.ENUM('No','Yes'),
      allowNull: false,
      defaultValue: "No"
    },
    DeletedBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    DeletedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    UpdatedBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PKCustomerID" },
        ]
      },
      {
        name: "EmailAddress",
        using: "BTREE",
        fields: [
          { name: "EmailAddress" },
        ]
      },
      {
        name: "Password",
        using: "BTREE",
        fields: [
          { name: "Password", length: 767 },
        ]
      },
      {
        name: "Status",
        using: "BTREE",
        fields: [
          { name: "Status" },
        ]
      },
      {
        name: "PasswordRecoveryCode",
        using: "BTREE",
        fields: [
          { name: "PasswordRecoveryCode" },
        ]
      },
      {
        name: "PasswordRecoveryCodeExpire",
        using: "BTREE",
        fields: [
          { name: "PasswordRecoveryCodeExpire" },
        ]
      },
      {
        name: "IsDeleted",
        using: "BTREE",
        fields: [
          { name: "IsDeleted" },
        ]
      },
    ]
  });
};
