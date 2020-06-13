1. 无状态组件
无状态即无state，从定义可以知道它是为功能性需求的。因为无state，所以无法改变UI，同时也没有生命周期。

2. 初始化数据写在外部和内部的区别
（1）内部可以直接访问外部数据，但是外部无法直接访问内部数据。
（2）定义在class内部的数据会随着每次刷新而重新渲染，如果数据量过多，会导致额外的开销，所以尽量减少state的体积和调用次数。