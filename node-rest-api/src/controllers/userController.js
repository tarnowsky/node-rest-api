const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: savedUser,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error while creating user'
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error while getting users',
            error: error.message,
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'User with given id not found.',
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: 'Error while getting user by id.',
            error: error.message,
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: 'No user for given id found to update.'
            });
        }

        res.status(200).json({
            message: 'User updated successfully',
            user: updatedUser,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Update user error',
            error: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: 'No user with given id found for delete.',
            });
        }

        res.status(200).json({
            message: 'User deleted successfully',
            user: deletedUser,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error while deleting user.',
            error: error.message,
        });
    }
}