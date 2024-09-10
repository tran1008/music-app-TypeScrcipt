const mongoose = require('mongoose');
// dạng Shema này dùng để lấy từng trường trong cơ sở dữ liệu
const topicSchema= mongoose.Schema({ 
    title:String,
    avatar:String,
    description:String,
    status:String,
    slug:String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
}, {
    timestamps: true
});
const Topic = mongoose.model('Topic', topicSchema,'topics');
export default Topic;