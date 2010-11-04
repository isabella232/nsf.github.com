var gowtfData = {"index":"index.html","html":"<p>\u000aThis package aids in the testing of code that uses channels.\u000a</p>\u000a","name":"script","filenames":["/home/nsf/go/src/pkg/testing/script/script.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Close!\">Close</a></h2>\u000a<pre>type Close struct {\u000a\u0009Channel interface{}\u000a}</pre>\u000a<p>\u000aA Close action closes the given channel.\u000a</p>\u000a\u000a","name":"Close","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Closed!\">Closed</a></h2>\u000a<pre>type Closed struct {\u000a\u0009Channel interface{}\u000a}</pre>\u000a<p>\u000aA Closed action matches if the given channel is closed. The closing is\u000atreated as an event, not a state, thus Closed will only match once for a\u000agiven channel.\u000a</p>\u000a\u000a","name":"Closed","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Event!\">Event</a></h2>\u000a<pre>type Event struct {\u000a\u0009// contains unexported fields\u000a}</pre>\u000a<p>\u000aAn Event is an element in a partially ordered set that either sends a value\u000ato a channel or expects a value from a channel.\u000a</p>\u000a\u000a","name":"Event","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ReceivedUnexpected!\">ReceivedUnexpected</a></h2>\u000a<pre>type ReceivedUnexpected struct {\u000a\u0009Value interface{}\u000a\u0009// contains unexported fields\u000a}</pre>\u000a<p>\u000aA ReceivedUnexpected error results if no active Events match a value\u000areceived from a channel.\u000a</p>\u000a\u000a","name":"ReceivedUnexpected","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ReceivedUnexpected\">func (ReceivedUnexpected)</a> <a href=\"?m:ReceivedUnexpected.String!\">String</a></h2>\u000a<code>func (r ReceivedUnexpected) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Recv!\">Recv</a></h2>\u000a<pre>type Recv struct {\u000a\u0009Channel  interface{}\u000a\u0009Expected interface{}\u000a}</pre>\u000a<p>\u000aA Recv action reads a value from a channel and uses reflect.DeepMatch to\u000acompare it with an expected value.\u000a</p>\u000a\u000a","name":"Recv","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:RecvMatch!\">RecvMatch</a></h2>\u000a<pre>type RecvMatch struct {\u000a\u0009Channel interface{}\u000a\u0009Match   func(interface{}) bool\u000a}</pre>\u000a<p>\u000aA RecvMatch action reads a value from a channel and calls a function to\u000adetermine if the value matches.\u000a</p>\u000a\u000a","name":"RecvMatch","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Send!\">Send</a></h2>\u000a<pre>type Send struct {\u000a\u0009Channel interface{}\u000a\u0009Value   interface{}\u000a}</pre>\u000a<p>\u000aA Send action sends a value to a channel. The value must match the\u000atype of the channel exactly unless the channel if of type chan interface{}.\u000a</p>\u000a\u000a","name":"Send","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SetupError!\">SetupError</a></h2>\u000a<pre>type SetupError string</pre>\u000a<p>\u000aA SetupError results if there is a error with the configuration of a set of\u000aEvents.\u000a</p>\u000a\u000a","name":"SetupError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:SetupError\">func (SetupError)</a> <a href=\"?m:SetupError.String!\">String</a></h2>\u000a<code>func (s SetupError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewEvent!\">NewEvent</a></h2>\u000a<code>func NewEvent(name string, predecessors []*Event, action action) *Event</code>\u000a\u000a","name":"NewEvent"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Perform!\">Perform</a></h2>\u000a<code>func Perform(seed int64, events []*Event) (err os.Error)</code>\u000a<p>\u000aGiven a set of Events, Perform repeatedly iterates over the set and finds the\u000asubset of ready Events (that is, all of their predecessors have\u000aoccurred). From that subset, it pseudo-randomly selects an Event to perform.\u000aIf the Event is a send event, the send occurs and Perform recalculates the ready\u000aset. If the event is a receive event, Perform waits for a value from any of the\u000achannels that are contained in any of the events. That value is then matched\u000aagainst the ready events. The first event that matches is considered to\u000ahave occurred and Perform recalculates the ready set.\u000a</p>\u000a<p>\u000aPerform continues this until all Events have occurred.\u000a</p>\u000a<p>\u000aNote that uncollected goroutines may still be reading from any of the\u000achannels read from after Perform returns.\u000a</p>\u000a<p>\u000aFor example, consider the problem of testing a function that reads values on\u000aone channel and echos them to two output channels. To test this we would\u000acreate three events: a send event and two receive events. Each of the\u000areceive events must list the send event as a predecessor but there is no\u000aordering between the receive events.\u000a</p>\u000a<pre>send := NewEvent(&#34;send&#34;, nil, Send{c, 1})\u000arecv1 := NewEvent(&#34;recv 1&#34;, []*Event{send}, Recv{c, 1})\u000arecv2 := NewEvent(&#34;recv 2&#34;, []*Event{send}, Recv{c, 1})\u000aPerform(0, []*Event{send, recv1, recv2})\u000a</pre>\u000a<p>\u000aAt first, only the send event would be in the ready set and thus Perform will\u000asend a value to the input channel. Now the two receive events are ready and\u000aPerform will match each of them against the values read from the output channels.\u000a</p>\u000a<p>\u000aIt would be invalid to list one of the receive events as a predecessor of\u000athe other. At each receive step, all the receive channels are considered,\u000athus Perform may see a value from a channel that is not in the current ready\u000aset and fail.\u000a</p>\u000a\u000a","name":"Perform"}],"consts":[],"vars":[]}