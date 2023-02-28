class Stack

    def initialize(limit=nil)
        @stack = []
        @limit = limit
    end

    def push(value)
        raise 'Stack Overflow' if self.full?
        @stack.push(value)
    end

    def pop
        @stack.pop
    end

    def peek
        @stack.last
    end

    def size
        @stack.length
    end

    def full?
        @limit && @stack.size == @limit
    end

    def empty?
        @stack.empty?
    end

    def search(target)
        idx = @stack.index(target)
        return -1 if !idx
        return self.size - idx - 1
    end


    
end
