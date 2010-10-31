var gowtfData = {"html":"<p>\u000aThe sync package provides basic synchronization primitives\u000asuch as mutual exclusion locks.  Other than the Once type,\u000amost are intended for use by low-level library routines.\u000aHigher-level synchronization  is better done via channels\u000aand communication.\u000a</p>\u000a","name":"sync","filenames":["/home/nsf/go/src/pkg/sync/once.go","/home/nsf/go/src/pkg/sync/mutex.go","/home/nsf/go/src/pkg/sync/rwmutex.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Mutex!\">Mutex</a></h2>\u000a<pre>type Mutex struct {\u000a\u0009key  uint32\u000a\u0009sema uint32\u000a}</pre>\u000a<p>\u000aA Mutex is a mutual exclusion lock.\u000aMutexes can be created as part of other structures;\u000athe zero value for a Mutex is an unlocked mutex.\u000a</p>\u000a\u000a","name":"Mutex","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Mutex\">func (*Mutex)</a> <a href=\"?m:Mutex.Lock!\">Lock</a></h2>\u000a<code>func (m *Mutex) Lock()</code>\u000a<p>\u000aLock locks m.\u000aIf the lock is already in use, the calling goroutine\u000ablocks until the mutex is available.\u000a</p>\u000a\u000a","name":"Lock"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Mutex\">func (*Mutex)</a> <a href=\"?m:Mutex.Unlock!\">Unlock</a></h2>\u000a<code>func (m *Mutex) Unlock()</code>\u000a<p>\u000aUnlock unlocks m.\u000aIt is a run-time error if m is not locked on entry to Unlock.\u000a</p>\u000a<p>\u000aA locked Mutex is not associated with a particular goroutine.\u000aIt is allowed for one goroutine to lock a Mutex and then\u000aarrange for another goroutine to unlock it.\u000a</p>\u000a\u000a","name":"Unlock"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Once!\">Once</a></h2>\u000a<pre>type Once struct {\u000a\u0009m    Mutex\u000a\u0009done bool\u000a}</pre>\u000a<p>\u000aOnce is an object that will perform exactly one action.\u000a</p>\u000a\u000a","name":"Once","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Once\">func (*Once)</a> <a href=\"?m:Once.Do!\">Do</a></h2>\u000a<code>func (o *Once) Do(f func())</code>\u000a<p>\u000aDo calls the function f if and only if the method is being called for the\u000afirst time with this receiver.  In other words, given\u000a</p>\u000a<pre>var once Once\u000a</pre>\u000a<p>\u000aif Do(f) is called multiple times, only the first call will invoke f,\u000aeven if f has a different value in each invocation.  A new instance of\u000aOnce is required for each function to execute.\u000a</p>\u000a<p>\u000aDo is intended for initialization that must be run exactly once.  Since f\u000ais niladic, it may be necessary to use a function literal to capture the\u000aarguments to a function to be invoked by Do:\u000a</p>\u000a<pre>config.once.Do(func() { config.init(filename) })\u000a</pre>\u000a<p>\u000aBecause no call to Do returns until the one call to f returns, if f causes\u000aDo to be called, it will deadlock.\u000a</p>\u000a\u000a","name":"Do"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:RWMutex!\">RWMutex</a></h2>\u000a<pre>type RWMutex struct {\u000a\u0009w           Mutex  // held if there are pending readers or writers\u000a\u0009r           Mutex  // held if the w is being rd\u000a\u0009readerCount uint32 // number of pending readers\u000a}</pre>\u000a<p>\u000aAn RWMutex is a reader/writer mutual exclusion lock.\u000aThe lock can be held by an arbitrary number of readers\u000aor a single writer.\u000aRWMutexes can be created as part of other\u000astructures; the zero value for a RWMutex is\u000aan unlocked mutex.\u000a</p>\u000a<p>\u000aWriters take priority over Readers: no new RLocks\u000aare granted while a blocked Lock call is waiting.\u000a</p>\u000a\u000a","name":"RWMutex","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.Lock!\">Lock</a></h2>\u000a<code>func (rw *RWMutex) Lock()</code>\u000a<p>\u000aLock locks rw for writing.\u000aIf the lock is already locked for reading or writing,\u000aLock blocks until the lock is available.\u000aTo ensure that the lock eventually becomes available,\u000aa blocked Lock call excludes new readers from acquiring\u000athe lock.\u000a</p>\u000a\u000a","name":"Lock"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.RLock!\">RLock</a></h2>\u000a<code>func (rw *RWMutex) RLock()</code>\u000a<p>\u000aRLock locks rw for reading.\u000aIf the lock is already locked for writing or there is a writer already waiting\u000ato r the lock, RLock blocks until the writer has released the lock.\u000a</p>\u000a\u000a","name":"RLock"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.RUnlock!\">RUnlock</a></h2>\u000a<code>func (rw *RWMutex) RUnlock()</code>\u000a<p>\u000aRUnlock undoes a single RLock call;\u000ait does not affect other simultaneous readers.\u000aIt is a run-time error if rw is not locked for reading\u000aon entry to RUnlock.\u000a</p>\u000a\u000a","name":"RUnlock"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:RWMutex\">func (*RWMutex)</a> <a href=\"?m:RWMutex.Unlock!\">Unlock</a></h2>\u000a<code>func (rw *RWMutex) Unlock()</code>\u000a<p>\u000aUnlock unlocks rw for writing.\u000aIt is a run-time error if rw is not locked for writing\u000aon entry to Unlock.\u000a</p>\u000a<p>\u000aLike for Mutexes,\u000aa locked RWMutex is not associated with a particular goroutine.\u000aIt is allowed for one goroutine to RLock (Lock) an RWMutex and then\u000aarrange for another goroutine to RUnlock (Unlock) it.\u000a</p>\u000a\u000a","name":"Unlock"}]}],"funcs":[],"consts":[],"vars":[]}