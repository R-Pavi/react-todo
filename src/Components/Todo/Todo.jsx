import Layout from "../Common/Layout";

const Todo = () => {
    return (
        <Layout>
            <div className="todo">
                <div className="todo__left">
                    <div class="todo__left__title">
                        <span>Todo</span>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="todo__content">

                </div>
                <div className="todo__right">

                </div>
            </div>
        </Layout>
    );
}

export default Todo;