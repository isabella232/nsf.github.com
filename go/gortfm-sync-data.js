var gortfmData = {index:"index.html",html:"<p>\nThe sync package provides basic synchronization primitives\nsuch as mutual exclusion locks.  Other than the Once type,\nmost are intended for use by low-level library routines.\nHigher-level synchronization is better done via channels\nand communication.\n</p>\n",name:"sync",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Mutex!\">Mutex</a></h2>\n<pre>type Mutex struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Mutex is a mutual exclusion lock.\nMutexes can be created as part of other structures;\nthe zero value for a Mutex is an unlocked mutex.\n</p>\n\n",name:"Mutex","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Mutex\">func (*Mutex)</a> <a href=\"?m:Mutex.Lock!\">Lock</a></h2>\n<code>func (m *Mutex) Lock()</code>\n<p>\nLock locks m.\nIf the lock is already in use, the calling goroutine\nblocks until the mutex is available.\n</p>\n\n",name:"Lock"},{html:"\n<h2><a class=\"black\" href=\"?m:Mutex\">func (*Mutex)</a> <a href=\"?m:Mutex.Unlock!\">Unlock</a></h2>\n<code>func (m *Mutex) Unlock()</code>\n<p>\nUnlock unlocks m.\nIt is a run-time error if m is not locked on entry to Unlock.\n</p>\n<p>\nA locked Mutex is not associated with a particular goroutine.\nIt is allowed for one goroutine to lock a Mutex and then\narrange for another goroutine to unlock it.\n</p>\n\n",name:"Unlock"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Once!\">Once</a></h2>\n<pre>type Once struct {\n\t// contains unexported fields\n}</pre>\n<p>\nOnce is an object that will perform exactly one action.\n</p>\n\n",name:"Once","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Once\">func (*Once)</a> <a href=\"?m:Once.Do!\">Do</a></h2>\n<code>func (o *Once) Do(f func())</code>\n<p>\nDo calls the function f if and only if the method is being called for the\nfirst time with this receiver.  In other words, given\n</p>\n<pre>var once Once\n</pre>\n<p>\nif once.Do(f) is called multiple times, only the first call will invoke f,\neven if f has a different value in each invocation.  A new instance of\nOnce is required for each function to execute.\n</p>\n<p>\nDo is intended for initialization that must be run exactly once.  Since f\nis niladic, it may be necessary to use a function literal to capture the\narguments to a function to be invoked by Do:\n</p>\n<pre>config.once.Do(func() { config.init(filename) })\n</pre>\n<p>\nBecause no call to Do returns until the one call to f returns, if f causes\nDo to be called, it will deadlock.\n</p>\n\n",name:"Do"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:RWMutex!\">RWMutex</a></h2>\n<pre>type RWMutex struct {\n\t// contains unexported fields\n}</pre>\n<p>\nAn RWMutex is a reader/writer mutual exclusion lock.\nThe lock can be held by an arbitrary number of readers\nor a single writer.\nRWMutexes can be created as part of other\nstructures; the zero value for a RWMutex is\nan unlocked mutex.\n</p>\n<p>\nWriters take priority over Readers: no new RLocks\nare granted while a blocked Lock call is waiting.\n</p>\n\n",name:"RWMutex","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.Lock!\">Lock</a></h2>\n<code>func (rw *RWMutex) Lock()</code>\n<p>\nLock locks rw for writing.\nIf the lock is already locked for reading or writing,\nLock blocks until the lock is available.\nTo ensure that the lock eventually becomes available,\na blocked Lock call excludes new readers from acquiring\nthe lock.\n</p>\n\n",name:"Lock"},{html:"\n<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.RLock!\">RLock</a></h2>\n<code>func (rw *RWMutex) RLock()</code>\n<p>\nRLock locks rw for reading.\nIf the lock is already locked for writing or there is a writer already waiting\nto release the lock, RLock blocks until the writer has released the lock.\n</p>\n\n",name:"RLock"},{html:"\n<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.RUnlock!\">RUnlock</a></h2>\n<code>func (rw *RWMutex) RUnlock()</code>\n<p>\nRUnlock undoes a single RLock call;\nit does not affect other simultaneous readers.\nIt is a run-time error if rw is not locked for reading\non entry to RUnlock.\n</p>\n\n",name:"RUnlock"},{html:"\n<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.Unlock!\">Unlock</a></h2>\n<code>func (rw *RWMutex) Unlock()</code>\n<p>\nUnlock unlocks rw for writing.\nIt is a run-time error if rw is not locked for writing\non entry to Unlock.\n</p>\n<p>\nLike for Mutexes,\na locked RWMutex is not associated with a particular goroutine.\nIt is allowed for one goroutine to RLock (Lock) an RWMutex and then\narrange for another goroutine to RUnlock (Unlock) it.\n</p>\n\n",name:"Unlock"}]}],funcs:[],consts:[],vars:[]}