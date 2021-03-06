import { Comment, Post } from '../api/types'

export const PostsMockData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tellus non mi vehicula euismod. Phasellus varius erat vestibulum porttitor faucibus. Nulla eleifend sem vel interdum pretium. Maecenas erat eros, dapibus eu faucibus!',
  },
  {
    id: 2,
    title: 'Nullam vel pharetra metus.',
    body: 'Nullam vel pharetra metus. Duis venenatis viverra ante, eget porta tellus. Ut fringilla tortor eu tortor commodo ullamcorper. Sed viverra ultrices lectus, et consequat urna sollicitudin vel. Vestibulum eget accumsan lacus. Maecenas tristique justo ut arcu tristique, vel rutrum leo tristique. Aenean tempor vitae nunc vel laoreet.',
  },
  {
    id: 3,
    title: 'Praesent et velit et neque rhoncus.',
    body: 'Praesent et velit et neque rhoncus congue vel eu ex. Cras hendrerit placerat ex a sollicitudin. Vivamus facilisis sollicitudin metus eget luctus. Duis ut magna erat. Integer nec ligula ornare, lobortis urna a, congue leo. Fusce lacus nulla, interdum sit amet nisi nec, semper auctor arcu',
  },
  {
    id: 4,
    title: 'Etiam eu ante accumsan, cursus risus.',
    body: 'Etiam eu ante accumsan, cursus risus sed, dapibus nunc. Etiam interdum ante risus, eget ultricies mi aliquet ut. Donec condimentum ultrices enim non feugiat. Suspendisse viverra quam mauris, quis molestie mauris blandit eget. Vestibulum vehicula non libero eu commodo',
  },
] as Post[]

export const CommentsMockData = [
  {
    id: 1,
    postId: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tellus non mi vehicula euismod. Phasellus varius erat vestibulum porttitor faucibus. Nulla eleifend sem vel interdum pretium. Maecenas erat eros, dapibus eu faucibus!',
  },
  {
    id: 2,
    postId: 1,
    text: 'Nullam vel pharetra metus. Duis venenatis viverra ante, eget porta tellus. Ut fringilla tortor eu tortor commodo ullamcorper. Sed viverra ultrices lectus, et consequat urna sollicitudin vel. Vestibulum eget accumsan lacus. Maecenas tristique justo ut arcu tristique, vel rutrum leo tristique. Aenean tempor vitae nunc vel laoreet.',
  },
  {
    id: 3,
    postId: 1,
    text: 'Praesent et velit et neque rhoncus congue vel eu ex. Cras hendrerit placerat ex a sollicitudin. Vivamus facilisis sollicitudin metus eget luctus. Duis ut magna erat. Integer nec ligula ornare, lobortis urna a, congue leo. Fusce lacus nulla, interdum sit amet nisi nec, semper auctor arcu',
  },
  {
    id: 4,
    postId: 1,
    text: 'Etiam eu ante accumsan, cursus risus sed, dapibus nunc. Etiam interdum ante risus, eget ultricies mi aliquet ut. Donec condimentum ultrices enim non feugiat. Suspendisse viverra quam mauris, quis molestie mauris blandit eget. Vestibulum vehicula non libero eu commodo',
  },
] as Comment[]
